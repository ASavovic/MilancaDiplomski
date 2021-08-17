using FileManager.Entities;
using FileManager.Repositories;
using FileManager.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace FileManager.Controllers
{

    [ApiController]
    [Route("api/files")]
    public class FileController : Controller
    {
        private readonly IFileRepository _fileRepository;
        private readonly IFileManagerService _fileManagerService;
        private readonly IConfiguration _configuration;

        public FileController(DatabaseContext context, IFileManagerService fileManagerService, IConfiguration configuration)
        {
            _fileRepository = new FileRepository(context);
            _fileManagerService = fileManagerService;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Entities.File>>> Index([FromQuery] int page, [FromQuery] int perPage)
        {
            var result = await _fileRepository.GetFiles(page, perPage);
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ActionResult<Entities.File>>> Show(int id)
        {
            var file = await _fileRepository.GetFile(id);
            if (file == null)
                return new NotFoundResult();

            return new ObjectResult(file);
        }

        // <ActionResult<Entities.File>>
        [HttpPost, DisableRequestSizeLimit]
        public async Task<ActionResult<Entities.File>> Upload()
        {
            try
            {
                var file = Request.Form.Files[0];

                if (file.Length > 0)
                {
                    string storage = _configuration.GetSection("Storage").GetSection("Storage").Value;
                    string files = _configuration.GetSection("Storage").GetSection("Files").Value;
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string path = Path.Combine(storage, files, fileName);

                    _fileManagerService.SaveFile(file, path);

                    var newFile = _fileRepository.Create(new Entities.File
                                                        {
                                                            Name = fileName,
                                                            Path = path,
                                                            UploadDateTime = DateTime.Now,
                                                            Size = file.Length
                                                        });

                    return new ObjectResult(newFile);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}
