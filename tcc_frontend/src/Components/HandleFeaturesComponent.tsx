function HandleFeaturesComponent() 
{
    interface mock 
    {
        name: string,
        description: string,
        link: string
    }
    const features: Array<mock> = [
        {name: 'mocked_view_data', description: '1', link: 'https://www.scielo.br/j/ci/a/sp3XpmZhXw384H5Fw9H89YL/?format=html&lang=pt'},
        {name: 'mocked_view_rdf', description: '2', link: 'https://www.typescriptlang.org/docs/handbook/2/objects.html'},
        {name: 'go_back', description: '2', link: 'https://www.typescriptlang.org/docs/handbook/2/objects.html'},
    ];

    function handleMouseClick(element: any) 
    {
        // console.log(element);
        console.log(element.target);
    }

    return (
        <div id = 'featuresContent' className = "bg-gray-500/25 w-max text-white rounded shadow-lg border-2 border-white [box-shadow:10px_10px_rgb(82_82_82)]">
            <ul>
                {features.map((f) => (<li title={f.description} key={f.name} className="hover:bg-slate-50 hover:text-black p-2" onClick={(e) => handleMouseClick(e)}> <b>{'>'} {f.name}</b> </li>))}
            </ul>
        </div>
    );
}

export default HandleFeaturesComponent;
