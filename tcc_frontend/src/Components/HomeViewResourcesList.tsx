import { useEffect } from "react";
function HomeViewResourcesList() 
{
    interface mock 
    {
        resource: string,
        amount: number,
        percent: number,
        status: string
    }
    const mocked_data: Array<mock> = [
        {resource: 'cpu', amount: 50, percent: 50, status: 'crit'},
        {resource: 'ram', amount: 50, percent: 50, status: 'crit'},
        {resource: 'disk_usage', amount: 50, percent: 50, status: 'crit'},
        {resource: 'requests', amount: 50, percent: 50, status: 'crit'},
        {resource: 'requests_per_min', amount: 50, percent: 50, status: 'crit'},
        {resource: 'database_status', amount: 50, percent: 50, status: 'crit'},
    ]
    useEffect(() => {});

    return (
        <table className="w-full text-center table-auto min-w-max text-slate-800">
            <thead>
                    <tr className="p-6 bg-gray-500/25 text-white rounded shadow-lg border-2 border-white">
                        <th className="p-5">
                            <p className="text-sm leading-none font-normal">
                                <b>Resource</b>
                            </p>
                        </th> 
                        <th className="p-5">
                            <p className="text-sm leading-none font-normal">
                                <b>Amount</b>
                            </p>
                        </th>
                        <th className="p-5">
                            <p className="text-sm leading-none font-normal">
                                <b>Percent</b>
                            </p>
                        </th>
                    </tr>
            </thead>
            
            <tbody>

                    {mocked_data.map((i) => {
                        return (
                            <tr className="hover:bg-slate-50 hover:text-black text-white text-center">
                                <td className="p-[]">
                                <p className="text-sm font-bold">
                                    {i.resource}
                                </p>
                                </td>
                                <td className="p-4">
                                <p className="text-sm">
                                    {i.amount}
                                </p>
                                </td>
                                <td className="p-4">
                                <p className="text-sm">
                                    {i.percent}
                                </p>
                                </td>
                        </tr>
                        )
                    })}

            </tbody>
        </table> 
    );
}

export default HomeViewResourcesList;