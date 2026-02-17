import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './QualityConditions.css';

const QualityConditions: React.FC = () => {
    const mainRef = useRef<HTMLElement>(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle Navbar visibility on scroll
    useEffect(() => {
        const mainElement = mainRef.current;
        const navbar = document.querySelector('nav');

        if (!mainElement || !navbar) return;

        // Ensure transition is enabled
        navbar.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';

        const handleScroll = () => {
            const scrollTop = mainElement.scrollTop;
            const threshold = window.innerHeight * 0.1; // Hide quickly after 10% scroll

            if (scrollTop > threshold) {
                // Hide navbar
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Show navbar
                navbar.style.transform = 'translateY(0)';
            }
        };

        // Add event listener to the scrolling element (main)
        mainElement.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup
        return () => {
            mainElement.removeEventListener('scroll', handleScroll);
            // Ensure navbar is visible when leaving
            navbar.style.transform = '';
            navbar.style.transition = '';
        };
    }, []);

    return (
        <main ref={mainRef} className="fixed inset-0 z-40 h-screen w-full overflow-y-scroll snap-y snap-mandatory light-grid-bg text-emerald-900 font-body scroll-smooth">

            {/* Background elements fixed */}
            <div className="fixed top-0 left-0 w-full h-screen pointer-events-none overflow-hidden opacity-40 z-0">
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-gray-300 rounded-full animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-secondary/30 rounded-full animate-spin-reverse border-dashed"></div>
                <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-secondary/5 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* SECTION 1: Text + Partial Orbit */}
            <section className="relative w-full h-screen snap-start flex flex-col items-center justify-start pt-32 lg:pt-40 z-10">

                <div className="text-center mb-10 relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-display font-black mb-4 tracking-tighter text-primary drop-shadow-sm">
                        CONDICIONES DE <span className="text-secondary-dark">CALIDAD</span>
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto font-medium tracking-wide text-sm border-t border-gray-200 pt-4 mt-2">
                        NAVEGUE EL COMPÁS ESTRATÉGICO DEL PROGRAMA DE INGENIERÍA EN INTELIGENCIA ARTIFICIAL
                    </p>

                    <div className="mt-8 animate-bounce text-primary/50">
                        <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
                        <p className="text-[10px] tracking-widest uppercase font-bold">Descubre Más</p>
                    </div>
                </div>

                {/* Partial Orbit Preview (Cropped from bottom) */}
                <div className="absolute bottom-[-400px] left-1/2 transform -translate-x-1/2 scale-75 opacity-50 pointer-events-none lg:block hidden">
                    {/* Visual cue only, identical structure to main orbit but non-interactive */}
                    <div className="w-[1000px] h-[1000px] border border-primary/10 rounded-full flex items-center justify-center">
                        <div className="w-[700px] h-[700px] border border-dashed border-secondary/20 rounded-full"></div>
                    </div>
                </div>

            </section>

            {/* SECTION 2: Full Orbit */}
            <section className="relative w-full h-screen snap-start flex flex-col items-center justify-center z-10 overflow-hidden">

                <div className="orbit-container hidden lg:block scale-[0.6] lg:scale-[0.65] xl:scale-75 2xl:scale-90 origin-center">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white border border-gray-100 flex flex-col items-center justify-center z-10 core-shadow transition-transform duration-500 overflow-hidden group-hover:scale-95">
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-80 z-0"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 z-10 pointer-events-none">
                            <span className="material-symbols-outlined text-6xl text-primary mb-2">hub</span>
                            <span className="text-xs text-primary font-display font-bold tracking-widest">UNITRÓPICO AI</span>
                            <div className="mt-4 w-16 h-0.5 bg-secondary"></div>
                        </div>
                        <div className="absolute inset-0 bg-primary flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 z-20" id="preview-panel">
                            <h3 className="text-white font-display text-xl mb-2 font-bold tracking-wider">VISUALIZAR</h3>
                            <div className="w-8 h-1 bg-secondary mb-3"></div>
                            <p className="text-gray-200 text-xs text-center px-6 font-medium leading-relaxed">Explore los detalles específicos de este componente del programa.</p>
                        </div>
                    </div>

                    <Link className="orbit-item pos-1 group w-56" to="/quality-conditions/01">
                        <div className="relative bg-white border border-gray-200 p-6 rounded-lg hover:border-secondary hover:bg-primary hover:text-white transition-all duration-300 elegant-shadow group-hover:shadow-xl group-hover:-translate-y-1">
                            <div className="absolute -top-3 -left-3 bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full font-display z-20 shadow-md border-2 border-white">01</div>
                            <div className="flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-3xl text-primary mb-2 group-hover:text-secondary group-hover:scale-110 transition-transform">description</span>
                                <h3 className="text-sm font-display font-bold text-gray-800 group-hover:text-white">Denominación</h3>
                                <div className="h-0.5 w-8 group-hover:w-full bg-gray-200 group-hover:bg-secondary transition-all duration-500 mt-2"></div>
                            </div>
                        </div>
                    </Link>

                    <Link className="orbit-item pos-2 group w-56" to="/quality-conditions/02">
                        <div className="relative bg-white border border-gray-200 p-6 rounded-lg hover:border-secondary hover:bg-primary hover:text-white transition-all duration-300 elegant-shadow group-hover:shadow-xl group-hover:-translate-y-1">
                            <div className="absolute -top-3 -left-3 bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full font-display z-20 shadow-md border-2 border-white">02</div>
                            <div className="flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-3xl text-primary mb-2 group-hover:text-secondary group-hover:scale-110 transition-transform">lightbulb</span>
                                <h3 className="text-sm font-display font-bold text-gray-800 group-hover:text-white">Justificación</h3>
                                <div className="h-0.5 w-8 group-hover:w-full bg-gray-200 group-hover:bg-secondary transition-all duration-500 mt-2"></div>
                            </div>
                        </div>
                    </Link>

                    <Link className="orbit-item pos-3 group w-56" to="/quality-conditions/03">
                        <div className="relative bg-white border border-gray-200 p-6 rounded-lg hover:border-secondary hover:bg-primary hover:text-white transition-all duration-300 elegant-shadow group-hover:shadow-xl group-hover:-translate-y-1">
                            <div className="absolute -top-3 -left-3 bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full font-display z-20 shadow-md border-2 border-white">03</div>
                            <div className="flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-3xl text-primary mb-2 group-hover:text-secondary group-hover:scale-110 transition-transform">school</span>
                                <h3 className="text-sm font-display font-bold text-gray-800 group-hover:text-white">Curricular</h3>
                                <div className="h-0.5 w-8 group-hover:w-full bg-gray-200 group-hover:bg-secondary transition-all duration-500 mt-2"></div>
                            </div>
                        </div>
                    </Link>

                    <Link className="orbit-item pos-4 group w-56" to="/quality-conditions/04">
                        <div className="relative bg-white border border-gray-200 p-6 rounded-lg hover:border-secondary hover:bg-primary hover:text-white transition-all duration-300 elegant-shadow group-hover:shadow-xl group-hover:-translate-y-1">
                            <div className="absolute -top-3 -left-3 bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full font-display z-20 shadow-md border-2 border-white">04</div>
                            <div className="flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-3xl text-primary mb-2 group-hover:text-secondary group-hover:scale-110 transition-transform">calendar_month</span>
                                <h3 className="text-sm font-display font-bold text-gray-800 group-hover:text-white">Organización</h3>
                                <div className="h-0.5 w-8 group-hover:w-full bg-gray-200 group-hover:bg-secondary transition-all duration-500 mt-2"></div>
                            </div>
                        </div>
                    </Link>

                    <Link className="orbit-item pos-5 group w-56" to="/quality-conditions/05">
                        <div className="relative bg-white border border-gray-200 p-6 rounded-lg hover:border-secondary hover:bg-primary hover:text-white transition-all duration-300 elegant-shadow group-hover:shadow-xl group-hover:-translate-y-1">
                            <div className="absolute -top-3 -left-3 bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full font-display z-20 shadow-md border-2 border-white">05</div>
                            <div className="flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-3xl text-primary mb-2 group-hover:text-secondary group-hover:scale-110 transition-transform">biotech</span>
                                <h3 className="text-sm font-display font-bold text-gray-800 group-hover:text-white">Investigación</h3>
                                <div className="h-0.5 w-8 group-hover:w-full bg-gray-200 group-hover:bg-secondary transition-all duration-500 mt-2"></div>
                            </div>
                        </div>
                    </Link>

                    <Link className="orbit-item pos-6 group w-56" to="/quality-conditions/06">
                        <div className="relative bg-white border border-gray-200 p-6 rounded-lg hover:border-secondary hover:bg-primary hover:text-white transition-all duration-300 elegant-shadow group-hover:shadow-xl group-hover:-translate-y-1">
                            <div className="absolute -top-3 -left-3 bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full font-display z-20 shadow-md border-2 border-white">06</div>
                            <div className="flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-3xl text-primary mb-2 group-hover:text-secondary group-hover:scale-110 transition-transform">handshake</span>
                                <h3 className="text-sm font-display font-bold text-gray-800 group-hover:text-white">Sector</h3>
                                <div className="h-0.5 w-8 group-hover:w-full bg-gray-200 group-hover:bg-secondary transition-all duration-500 mt-2"></div>
                            </div>
                        </div>
                    </Link>

                    <Link className="orbit-item pos-7 group w-56" to="/quality-conditions/07">
                        <div className="relative bg-white border border-gray-200 p-6 rounded-lg hover:border-secondary hover:bg-primary hover:text-white transition-all duration-300 elegant-shadow group-hover:shadow-xl group-hover:-translate-y-1">
                            <div className="absolute -top-3 -left-3 bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full font-display z-20 shadow-md border-2 border-white">07</div>
                            <div className="flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-3xl text-primary mb-2 group-hover:text-secondary group-hover:scale-110 transition-transform">groups</span>
                                <h3 className="text-sm font-display font-bold text-gray-800 group-hover:text-white">Docentes</h3>
                                <div className="h-0.5 w-8 group-hover:w-full bg-gray-200 group-hover:bg-secondary transition-all duration-500 mt-2"></div>
                            </div>
                        </div>
                    </Link>

                    <Link className="orbit-item pos-8 group w-56" to="/quality-conditions/08">
                        <div className="relative bg-white border border-gray-200 p-6 rounded-lg hover:border-secondary hover:bg-primary hover:text-white transition-all duration-300 elegant-shadow group-hover:shadow-xl group-hover:-translate-y-1">
                            <div className="absolute -top-3 -left-3 bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full font-display z-20 shadow-md border-2 border-white">08</div>
                            <div className="flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-3xl text-primary mb-2 group-hover:text-secondary group-hover:scale-110 transition-transform">computer</span>
                                <h3 className="text-sm font-display font-bold text-gray-800 group-hover:text-white">Medios</h3>
                                <div className="h-0.5 w-8 group-hover:w-full bg-gray-200 group-hover:bg-secondary transition-all duration-500 mt-2"></div>
                            </div>
                        </div>
                    </Link>

                    <Link className="orbit-item pos-9 group w-56" to="/quality-conditions/09">
                        <div className="relative bg-white border border-gray-200 p-6 rounded-lg hover:border-secondary hover:bg-primary hover:text-white transition-all duration-300 elegant-shadow group-hover:shadow-xl group-hover:-translate-y-1">
                            <div className="absolute -top-3 -left-3 bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full font-display z-20 shadow-md border-2 border-white">09</div>
                            <div className="flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-3xl text-primary mb-2 group-hover:text-secondary group-hover:scale-110 transition-transform">apartment</span>
                                <h3 className="text-sm font-display font-bold text-gray-800 group-hover:text-white">Infraestructura</h3>
                                <div className="h-0.5 w-8 group-hover:w-full bg-gray-200 group-hover:bg-secondary transition-all duration-500 mt-2"></div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="lg:hidden w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pb-32">
                    {/* Mobile cards... simplified for brevity, following the pattern of the orbit items but in a grid */}
                    {[
                        { id: "01", title: "Denominación" },
                        { id: "02", title: "Justificación" },
                        { id: "03", title: "Aspectos Curriculares" },
                        { id: "04", title: "Organización" },
                        { id: "05", title: "Investigación" },
                        { id: "06", title: "Relación Sector" },
                        { id: "07", title: "Personal Docente" },
                        { id: "08", title: "Medios Educativos" },
                        { id: "09", title: "Infraestructura" }
                    ].map((item) => (
                        <Link key={item.id} className="block bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary transition-all duration-300" to={`/quality-conditions/${item.id}`}>
                            <div className="flex items-center gap-4">
                                <span className="text-secondary font-display font-bold text-xl">{item.id}</span>
                                <h3 className="text-primary font-display font-bold">{item.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>


            </section>
        </main>
    );
};

export default QualityConditions;
