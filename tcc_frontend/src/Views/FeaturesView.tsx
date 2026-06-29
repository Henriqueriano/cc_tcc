function FeaturesView() 
{
    const features = [
        {name: 'Mocked_Feature_1', description: '1', link: ''},
        {name: 'Mocked_Feature_2', description: '2', link: ''},
        {name: 'Mocked_Feature_3', description: '3', link: ''},
        {name: 'Mocked_Feature_4', description: '4', link: ''},
        {name: 'Mocked_Feature_5', description: 'Grr', link: ''},
    ];

    function handleMouseClick(element) 
    {
        console.log(element);
    }

    return (
            <div className = "bg-gray-500/25 w-max m-7 text-white rounded shadow-lg border-2 border-white [box-shadow:10px_10px_rgb(82_82_82)]">
            <ul>
                {features.map((f) => (<li title={f.description} key={f.name} className="p-3" onClick={(e) => handleMouseClick(e)}> > {f.name} </li>))}
            </ul>
        </div>
    );
}

export default FeaturesView;
