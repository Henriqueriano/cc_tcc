using System;
using System.Diagnostics.CodeAnalysis;
using System.Reflection.Metadata;
namespace tcc_backend.Dtos;

public class InsertDataDto
{
    // Define properties for the data to be inserted
    public Guid UserId { get; set; }
    public Blob BlobData { get; set; }
    public Metadata Metadata { get; set; }
    public DateTime EventDate { get; set; }
}

public class Metadata
{
    // Define properties for the metadata
    public string Description { get; set; }
    public string Category { get; set; }
    public string Tags { get; set; }
}
