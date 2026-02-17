import React from 'react';
import {
    ArrowLeft,
    FileText,
    Target,
    BookOpen,
    Briefcase,
    Search,
    Handshake,
    GraduationCap,
    Monitor,
    Building,
    ChevronRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { conditions } from '../../data/conditions';

// Utility for merging classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const iconMap: { [key: string]: React.ElementType } = {
    FileText,
    Target,
    BookOpen,
    Briefcase,
    Search,
    Handshake,
    GraduationCap,
    Monitor,
    Building
};



interface SidebarItemProps {
    active: boolean;
    title: string;
    icon: any;
    to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    active,
    title,
    icon: Icon,
    to
}) => {
    return (
        <Link
            to={to}
            className={cn(
                "w-full text-left px-4 py-3 rounded-xl flex items-center justify-between group transition-all duration-200",
                active
                    ? "bg-green-50 text-green-900 shadow-sm border border-green-100"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent"
            )}
        >
            <div className="flex items-center gap-3">
                <span className={cn(
                    "p-2 rounded-lg transition-colors",
                    active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500 group-hover:bg-white group-hover:text-gray-700"
                )}>
                    <Icon size={18} />
                </span>
                <span className="font-medium">{title}</span>
            </div>
            {active && (
                <motion.div layoutId="active-indicator">
                    <ChevronRight size={16} className="text-green-600" />
                </motion.div>
            )}
        </Link>
    );
};

interface ContentCardProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    id: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, subtitle, children, id }) => {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden h-full flex flex-col"
        >
            <div className="p-6 border-b border-gray-50 bg-gray-50/30">
                <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm font-medium">
                    <button onClick={() => navigate('/quality-conditions')} className="flex items-center gap-1 hover:text-green-700 transition-colors">
                        <ArrowLeft size={16} />
                        Volver
                    </button>
                    <span className="text-gray-300">|</span>
                    <span className="text-secondary font-bold font-montserrat">{id}</span>
                </div>
                <h2 className="text-3xl font-bold text-green-950 mb-2 font-montserrat tracking-tight">{title}</h2>
                <p className="text-gray-500 font-montserrat">{subtitle}</p>
            </div>

            <div className="p-6 flex-1 overflow-y-auto font-montserrat">
                {children}
            </div>
        </motion.div>
    );
};

interface ConditionLayoutProps {
    children: React.ReactNode;
    activeId: string;
    title: string;
    description: string;
}

const ConditionLayout: React.FC<ConditionLayoutProps> = ({ children, activeId, title, description }) => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-montserrat selection:bg-green-100 selection:text-green-900">

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] min-h-[600px]">

                    {/* Left Sidebar Menu (30%) */}
                    <aside className="w-full lg:w-[30%] flex flex-col gap-4">
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 h-full flex flex-col">
                            <div className="mb-6 px-2 pt-2">
                                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Condiciones de Calidad</h2>
                                <div className="space-y-2">
                                    {conditions.map((item) => (
                                        <SidebarItem
                                            key={item.id}
                                            active={activeId === item.id}
                                            title={item.title}
                                            icon={iconMap[item.icon as keyof typeof iconMap] || FileText}
                                            to={`/quality-conditions/${item.id}`}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </aside>

                    {/* Right Content Area (70%) */}
                    <section className="w-full lg:w-[70%] h-full relative">
                        <AnimatePresence mode="wait">
                            <ContentCard
                                key={activeId}
                                title={title}
                                subtitle={description}
                                id={activeId}
                            >
                                {children}
                            </ContentCard>
                        </AnimatePresence>
                    </section>

                </div>
            </main>
        </div>
    );
}

export default ConditionLayout;
