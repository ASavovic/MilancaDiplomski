
using FakeItEasy;
using FileManager.Controllers;
using FileManager.Entities;
using FileManager.Repositories;
using FileManager.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace FileMangerTests
{
    [TestClass]
    public class FileManagerUnitTest

    {
        [TestMethod]
        public void CanReturnContentType()
        {
            var file = new File();
            var result = file.GetContentType("Storage\\Files\\test.html");
            Assert.IsTrue(result=="text/html");
        }

        [TestMethod]
        public void CanReturnContentTypeThatWillFail()
        {
            var file = new File();
            var result = file.GetContentType("Storage\\Files\\test.html");
            Assert.IsTrue(result == ".html");
        }

        [TestMethod]
        public async Task Get_Files_Returns_List_Of_Files()
        {
            // Arrange
            DatabaseContext context = A.Fake<DatabaseContext>();
            var managerService = A.Fake<IFileManagerService>();
            var configuration = A.Fake<IConfiguration>();
            var fileRepository = A.Fake<FileRepository>();
            var fakeFiles = A.CollectionOfDummy<File>(5).AsEnumerable();
            var controller = new FileController(context, managerService, configuration);

            A.CallTo(() => fileRepository.GetFiles(1, 10)).Returns(Task.FromResult(fakeFiles));

            //Act
            var actionResult = await controller.Index(1, 10);

            //Asert
            var result = actionResult.Result as OkObjectResult;
            var resultfiles = result.Value as IEnumerable<File>;
            Assert.IsTrue(5== resultfiles.Count());
            
      
        }
    }
}
