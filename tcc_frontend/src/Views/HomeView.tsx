import HandleFeaturesComponent from '../Components/HandleFeaturesComponent.tsx';
import HomeViewResourcesList from '@/Components/HomeViewResourcesList.tsx';
function HomeView() 
{
    return (
        <main className = 'grid grid-cols-6 gap-4 mx-5'>
            <aside className='my-4'>
                <HandleFeaturesComponent />
            </aside>

            <section className = 'col-span-5 h-screen p-4'>
                <div className = 'flex h-1/2'>
                    <div className = 'hover:bg-slate-50 hover:text-black w-1/2 text-center'>
                            <b><p>Graphical View</p></b>
                    </div>
                    <div className = 'w-1/2 text-center'>
                        <HomeViewResourcesList />
                    </div>
                </div>

                <div className = 'flex h-1/2'>
                    <div className = 'hover:bg-slate-50 hover:text-black w-1/2 text-center'>
                        <b><p>Numéric View</p></b>
                    </div>
                    <div className = 'hover:bg-slate-50 hover:text-black w-1/2 text-center'>
                        <b><p>???</p></b>
                    </div>

               </div>

            </section>
        </main>
    );
}

export default HomeView;
