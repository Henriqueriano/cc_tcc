import HomeViewGraph from '@/Components/HomeViewGraph.tsx';
import HandleFeaturesComponent from '../Components/HandleFeaturesComponent.tsx';
import HomeViewResourcesList from '@/Components/HomeViewResourcesList.tsx';
function HomeView() 
{
    return (
        <main className = 'grid grid-cols-6 gap-4 mx-5'>
            <aside className='py-4'>
                <HandleFeaturesComponent />
            </aside>

            <section className = 'col-span-5 h-screen py-4'>
                <div className = 'flex h-1/2 gap-4 pb-4'>
                    <div className = 'bg-slate-50 text-black w-1/2 text-center bg-gray-500/25 border-2 border-black'>
                            <HomeViewGraph />
                    </div>
                    <div className = 'w-1/2 text-center overflow-auto border-2 border-white'>
                        <HomeViewResourcesList />
                    </div>
                </div>

                <div className = 'flex h-1/2 gap-4'>
                    <div className = 'hover:bg-slate-50 hover:text-black w-1/2 text-center border-2 border-white'>
                        <b><p>Numeric View</p></b>
                    </div>
                    <div className = 'bg-slate-50 text-black w-1/2 text-center bg-gray-500/25 border-2 border-black'>
                        <b><p>Server Status View</p></b>
                    </div>

               </div>

            </section>
        </main>
    );
}

export default HomeView;
