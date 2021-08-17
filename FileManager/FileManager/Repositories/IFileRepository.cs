using FileManager.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FileManager.Repositories
{
    public interface IFileRepository
    {
        Task<IEnumerable<Entities.File>> GetFiles(int page, int count);
        Task<Entities.File> GetFile(int id);
        Entities.File Create(Entities.File file);
    }
}
