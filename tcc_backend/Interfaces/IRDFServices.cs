using System;
using tcc_backend.Dtos;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace tcc_backend.Interfaces;
public interface IRDFServices 
{
    public Task<RetrieveDataDto> Insert(InsertDataDto data);     
    public Task<RetrieveDataDto> GetData(string id);
    public Task<IActionResult> DeleteData(string id);
    public Task<IActionResult> UpdateData(string id, InsertDataDto dto);
    public Task<IActionResult> PartialUpdateData(string id, InsertDataDto dto);
    public Task<IActionResult> QueryData();
}
