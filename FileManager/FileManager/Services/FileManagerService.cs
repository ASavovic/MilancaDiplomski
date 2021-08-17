using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace FileManager.Services
{
    public class FileManagerService : IFileManagerService
    {
        public void SaveFile(IFormFile file, string path)
        {
            var fullPath = Path.Combine(Directory.GetCurrentDirectory(), path);

            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }

        }
    }
}
