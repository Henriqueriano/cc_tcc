// using dotNetRdf.Core;
using System;
using VDS.RDF.Query;
using VDS.RDF.Parsing;
using tcc_backend.Dtos;
using tcc_backend.Interfaces;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace tcc_backend.Services;
public class RDFServices : IRDFServices
{
    private readonly IConfiguration _configuration;
    public RDFServices(IConfiguration config)
    {
        this._configuration = config;   
    }
    public async Task<RetrieveDataDto> Insert(InsertDataDto data)
    {
        throw new NotImplementedException();
    }
    
    public async Task<RetrieveDataDto> GetData(string id)
    {
        throw new NotImplementedException();
    }

    public async Task<IActionResult> DeleteData(string id)
    {
        throw new NotImplementedException();
    }
 
    public async Task<IActionResult> UpdateData(string id, InsertDataDto dto)
    {
        throw new NotImplementedException();
    }
 
    public async Task<IActionResult> PartialUpdateData(string id, InsertDataDto dto)
    {
        throw new NotImplementedException();
    }
 
    public async Task<IActionResult> QueryData()
    {
        throw new NotImplementedException();
    }
}
