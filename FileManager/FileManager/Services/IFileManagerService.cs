using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace FileManager.Services
{
    public interface IFileManagerService
    {
        public void SaveFile(IFormFile file, string path);
    }
}
