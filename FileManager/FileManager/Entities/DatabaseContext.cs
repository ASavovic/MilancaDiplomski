using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace FileManager.Entities
{
    public class DatabaseContext: DbContext
    {
        public DbSet<File> Files { get; set; }

        public DatabaseContext(DbContextOptions options)
            : base(options)
        {

        }
    }
}
