import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
	ChevronRight,
	BarChart2,
	Brain,
	Database,
	LineChart,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen'>
			{/* Hero Section */}
			<section className='relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background'>
				<div className='container relative z-10'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div className='space-y-8'>
							<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
								Capacitando Decisões Baseadas em{' '}
								<span className='text-primary'>Dados</span>
							</h1>
							<p className='text-xl text-muted-foreground'>
								A Simaa fornece soluções avançadas de sistemas de informação,
								monitoria e avaliação para impulsionar o impacto nos setores de
								educação, saúde e desenvolvimento.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<Button size='lg' asChild>
									<Link href='/services'>
										Explorar Nossos Serviços
										<ChevronRight className='ml-2 h-4 w-4' />
									</Link>
								</Button>
								<Button size='lg' variant='outline' asChild>
									<Link href='/contact'>Entre em Contacto</Link>
								</Button>
							</div>
						</div>
						<div className='relative'>
							<Image
								src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
								alt='Painel de Análise de Dados'
								width={600}
								height={400}
								className='rounded-lg shadow-2xl'
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className='py-20'>
				<div className='container'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold mb-4'>Nossos Serviços</h2>
						<p className='text-muted-foreground max-w-2xl mx-auto'>
							Soluções abrangentes para suas necessidades de sistemas de
							informação, monitoria e avaliação
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{services.map((service) => (
							<Card
								key={service.title}
								className='p-6 hover:shadow-lg transition-shadow'
							>
								<service.icon className='h-12 w-12 text-primary mb-4' />
								<h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
								<p className='text-muted-foreground mb-4'>
									{service.description}
								</p>
								<Link
									href={service.href}
									className='text-primary hover:underline inline-flex items-center'
								>
									Saiba mais
									<ChevronRight className='ml-1 h-4 w-4' />
								</Link>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-primary text-primary-foreground'>
				<div className='container text-center'>
					<h2 className='text-3xl font-bold mb-4'>
						Pronto para Transformar sua Estratégia de Dados?
					</h2>
					<p className='text-lg mb-8 opacity-90 max-w-2xl mx-auto'>
						Vamos discutir como a Simaa pode ajudá-lo a alcançar seus objectivos
						através de sistemas de informação e soluções de monitoria e
						avaliação inovadores.
					</p>
					<Button size='lg' variant='secondary' asChild>
						<Link href='/contact'>Comece Hoje</Link>
					</Button>
				</div>
			</section>
		</div>
	);
}

const services = [
	{
		title: 'Sistemas de Informação',
		description:
			'Soluções personalizadas para gestão e análise eficiente de dados',
		icon: Database,
		href: '/services/information-systems',
	},
	{
		title: 'Monitoria & Avaliação',
		description: 'Acompanhe e meça o impacto do projecto com precisão',
		icon: BarChart2,
		href: '/services/monitoring-evaluation',
	},
	{
		title: 'Soluções de Aprendizagem',
		description: 'Aprimore o conhecimento e as capacidades organizacionais',
		icon: Brain,
		href: '/services/learning',
	},
	{
		title: 'Análise de Dados',
		description: 'Transforme dados brutos em insights acionáveis',
		icon: LineChart,
		href: '/services/data-analytics',
	},
];
