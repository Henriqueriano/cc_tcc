import HandleFeaturesComponent from '../Components/HandleFeaturesComponent.tsx';

function MainView() 
{
    return (
        <main className = 'grid grid-cols-6 gap-4 m-7'>
            <aside className = 'bg-red-900 p-4'>
                <HandleFeaturesComponent />
            </aside>

            <section className = 'bg-green-900 col-span-5 h-screen p-4'>

                <div className = 'flex h-1/2'>

                    <div className = 'w-1/2 bg-yellow-500 text-center'>
                        <p>total relativo aos tipos</p>
                    </div>

                    <div className = 'w-1/2 bg-yellow-900 text-center'>
                        <p>listagem de tipos (cpu | ram | requests | )</p>
                    </div>

                </div>

                <div className = 'flex h-1/2'>
 
                    <div className = 'w-1/2 bg-yellow-900 text-center'>
                        <p>visão numérica</p>
                    </div>

                    <div className = 'w-1/2 bg-yellow-500 text-center'>
                        <p>???</p>
                    </div>

               </div>

            </section>
        </main>
    );
}

export default MainView;
