using System;
using tcc_backend.Dtos; 
using tcc_backend.Interfaces;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace tcc_backend.Controllers;
[ApiController]
[Route("[controller]/[action]")]
public class CoreController : ControllerBase
{
    private readonly IRDFServices _rdfService;

    public CoreController(IRDFServices rdfService) 
    {
        this._rdfService = rdfService;
    }

    [HttpPost(Name = "insert")]
    public async Task<IActionResult> Insert(InsertDataDto dto)
    {
        /** Calls service layer and returns result 
            if the data is registered successfully, return 200 OK with the registered data
            if there is an error, return 400 Bad Request with the error message
        */
        
        throw new NotImplementedException();
    }

    [HttpGet(Name = "get_data/{id}")]
    public async Task<IActionResult> GetData(string id)
    {
        /** Calls service layer and returns result 
        if the data is found, return 200 OK with the data
        if the data is not found, return 404 Not Found
        */
        throw new NotImplementedException();
    }

    [HttpDelete(Name = "delete/{id}")]
    public async Task<IActionResult> DeleteData(string id)
    {
        /** Calls service layer and returns result 
        if the data is deleted successfully, return 200 OK
        if the data is not found, return 404 Not Found
        */
        throw new NotImplementedException();
    }

    [HttpPut(Name = "update/{id}")]
    public async Task<IActionResult> UpdateData(string id, InsertDataDto dto)
    {
        /** Calls service layer and returns result 
        if the data is updated successfully, return 200 OK with the updated data
        if the data is not found, return 404 Not Found
        */
        throw new NotImplementedException();
    }

    [HttpPatch(Name = "partial_update/{id}")]
    public async Task<IActionResult> PartialUpdateData(string id, InsertDataDto dto)
    {
        /** Calls service layer and returns result 
        if the data is updated successfully, return 200 OK with the updated data
        if the data is not found, return 404 Not Found
        */
        throw new NotImplementedException();
    }

    [HttpGet(Name = "query_data/")]
    public async Task<IActionResult> QueryData()
    {
        /** Calls service layer and returns result 
        if the data is found, return 200 OK with the data
        if the data is not found, return 404 Not Found
        */
        throw new NotImplementedException();
    }

}
