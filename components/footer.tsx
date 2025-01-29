import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
	return (
		<footer className='bg-background border-t'>
			<div className='container py-12 md:py-16'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Sobre a Simaa</h3>
						<p className='text-sm text-muted-foreground'>
							Capacitando organizações através de sistemas de informação
							inovadores, monitoramento, avaliação e soluções de aprendizagem.
						</p>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Links Rápidos</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									Sobre Nós
								</Link>
							</li>
							<li>
								<Link
									href='/services'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									Serviços
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									Contacto
								</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Contacto</h3>
						<ul className='space-y-2'>
							<li className='flex items-center space-x-2 text-sm text-muted-foreground'>
								<Mail className='h-4 w-4' />
								<span>info@simaa.co.mz</span>
							</li>
							<li className='flex items-center space-x-2 text-sm text-muted-foreground'>
								<Phone className='h-4 w-4' />
								<span>+258 84 333 3333</span>
							</li>
							<li className='flex items-center space-x-2 text-sm text-muted-foreground'>
								<MapPin className='h-4 w-4' />
								<span>Rua das Flores, 123 - Beira</span>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Siga-nos</h3>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Facebook className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Twitter className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Linkedin className='h-5 w-5' />
							</Link>
						</div>
					</div>
				</div>
				<div className='mt-8 pt-8 border-t text-center text-sm text-muted-foreground'>
					<p>
						© {new Date().getFullYear()} Simaa. Todos os direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
