using FileManager.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileManager.Repositories
{
    public class FileRepository : IFileRepository
    {
        private readonly DatabaseContext _dbContext;

        public FileRepository(DatabaseContext databaseContext)
        {
            _dbContext = databaseContext;
        }

        public async Task<IEnumerable<Entities.File>> GetFiles(int page, int count)
        {
            return await _dbContext.Files.Skip((page - 1) * count).Take(count).ToListAsync();
        }

        public async Task<Entities.File> GetFile(int id)
        {
            return await _dbContext.Files.FindAsync(id);
        }

        public Entities.File Create(Entities.File file)
        {
            _dbContext.Files.Add(file);
            _dbContext.SaveChanges();

            return file;
        }
    }
}
