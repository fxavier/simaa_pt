'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';

export function Navbar() {
	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-20 items-center'>
				<div className='mr-4 flex items-center space-x-2'>
					<Link href='/' className='flex items-center space-x-2'>
						<Image
							src='/images/simaalogo.png'
							alt='Logo Simaa'
							width={120}
							height={40}
							className='h-10 w-auto'
						/>
					</Link>
				</div>
				<NavigationMenu className='ml-auto'>
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href='/' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Início
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href='/about' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Sobre
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
									{services.map((service) => (
										<ListItem
											key={service.title}
											title={service.title}
											href={service.href}
										>
											{service.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href='/blog' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Blog
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href='/contact' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Contacto
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className='ml-4'>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}

const services = [
	{
		title: 'Sistemas de Informação',
		href: '/services/information-systems',
		description: 'Soluções personalizadas para gestão e análise de dados',
	},
	{
		title: 'Monitoramento & Avaliação',
		href: '/services/monitoring-evaluation',
		description: 'Acompanhe e meça o impacto do projeto com precisão',
	},
	{
		title: 'Soluções de Aprendizagem',
		href: '/services/learning',
		description: 'Aprimore o conhecimento e as capacidades organizacionais',
	},
	{
		title: 'Análise de Dados',
		href: '/services/data-analytics',
		description: 'Transforme dados brutos em insights acionáveis',
	},
];

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>{title}</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
