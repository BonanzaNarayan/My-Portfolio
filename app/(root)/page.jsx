import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { services } from '@/data/services'
import { techStack } from '@/data/tech_stack'
import { Mail } from 'lucide-react'
import { MessageCircle } from 'lucide-react'
import { Code2Icon } from 'lucide-react'
import { CodeSquare } from 'lucide-react'
import { Phone } from 'lucide-react'
import { CodeXml } from 'lucide-react'
import { Code } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  InputGroup
} from "@/components/ui/input-group"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'
import Image from 'next/image'
import { Link2 } from 'lucide-react'

export default function page() {
  return (
    <div>
      <Header />
      <div className='px-6 py-4 overflow-hidden'>
        <Hero />

        {/* Services */}
        <section className='mt-20' id='services'>
          <h1 className='scroll-m-20 text-start text-4xl font-extrabold tracking-tight text-balance'>Services</h1>
          <p className='leading-7 [&:not(:first-child)]:mt-6 text-primary/70'>
            Comprehensive web development services tailored to bring your digital ideas to life
          </p>

          <div className='border min-h-screen mt-5 rounded-3xl p-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2'>
              {
                services.map((service)=>(

             
                <Card
                  key={service.title}
                  className={`${service?.col_span}`}
                >
                  <CardHeader>
                    <service.icon />
                    <h1 className='scroll-m-20 text-start text-xl font-extrabold tracking-tight text-balance'>{service.title}</h1>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3>Categories</h3>
                    <div className='flex items-center flex-wrap gap-2 mt-2'>
                      {
                        service.features.map((feature, index)=>(
                          <span key={index} className='p-1 px-2 text-sm bg-primary text-secondary rounded-full'>{feature}</span>
                        ))
                      }
                    </div>
                  </CardContent>
                </Card>
               ))
              }
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className='mt-20' id='tech-stacks'>
          <h1 className='scroll-m-20 text-start text-4xl font-extrabold tracking-tight text-balance'>Tech Stack</h1>
          <div className='flex items-center flex-wrap gap-3 justify-center mt-5'>
            {techStack.map((tech, index) => (
              <Card key={index} className={'p-2 rounded-full'}>
                  <div className='flex items-center gap-2'>
                    <img src={tech.icon} alt="" className='w-8 h-8 object-contain rounded'/>
                    <h2>{tech.name}</h2>
                  </div>
              </Card>
            ))}
          </div>
        </section>

        {/* About */}
        <section className='mt-20' id='about'>
          <h1 className='scroll-m-20 text-start text-4xl font-extrabold tracking-tight text-balance'>About Me</h1>

          <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 dots p-2'>
            <article className='flex flex-col items-center justify-center'>

              <p className='leading-7 [&:not(:first-child)]:mt-6'>
              Hey, I'm <span className='text-transparent bg-gradient-to-l from-rose-500 to-orange-500 bg-clip-text'>Bonanza Narayan,</span> the guy who builds websites that actually do something. Not just “look nice.” I'm talking SaaS and Business ready, conversion-focused, and ready to ship.
              </p>

              <p className='leading-7 [&:not(:first-child)]:mt-6'>I don't build websites for the sake of showing off animations — I build systems that help people launch, sell, and scale online. Whether it's a startup dashboard, a small business site, or a full-blown SaaS or templates, I like to make things that work hard in the background while still looking 🔥 on the surface.</p>

              <p className='leading-7 [&:not(:first-child)]:mt-6'>My stack? <b className='text-rose-500'>Next.js</b>, <b className='text-blue-600'>React</b>, <b className='text-indigo-500'>Tailwind</b>, <b className='text-green-500'>Supabase</b>, <b className='text-orange-500'>Firebase</b> and <Link href={'#tech-stacks'} className='text-red-500 underline'>others👆</Link> — the dream team for speed and functionality.</p>

              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                I'm currently crafting a collection of developer templates and boiler plates, business sites and SaaS projects, designed to help people launch their next idea in days, not weeks.
              </p>

              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                If you're trying to turn that “what if” into something real — I'm your dev. Let's build something worth showing off. 🚀
              </p>

              <div className='mt-10 flex items-center justify-center gap-5 bg-black px-6 py-2 rounded-3xl shadow-2xl border'>
                <Link href={'https://x.com/svddiin'} target='_blank'>
                  
                  <img src="/x_dark.svg" alt="" className='w-8' />
                  
                </Link>
                <Link href={'https://github.com/BonanzaNarayan'} target='_blank'>
                  <img src="/github_dark.svg" alt="" className='w-8' />
                </Link>
              </div>
            </article>
            <div className='flex items-center justify-center relative'>
              <div className=' absolute top-0 left-0 lg:left-0'>
                <Code className='text-orange-500' />
              </div>
              <div className=' absolute -bottom-10 left-10 md:bottom-0'>
                <CodeXml className='text-rose-500' />
              </div>
              <div className=' absolute top-0 right-0'>
                <Code2Icon className='text-green-500 rotate-45' />
              </div>
              <div className=' absolute bottom-0 right-0'>
                <CodeSquare className='text-purple-500 rotate-45' />
              </div>
              <img src="https://i.pinimg.com/736x/26/5e/48/265e4837c450df15bb2cba012817fbd8.jpg" alt="" className='w-70 md:w-100 rounded-3xl rotate-10'/>
            </div>
          </div>
        </section>

        {/* Recent Project */}
        <section className='mt-20' id='projects'>
            <h1 className='scroll-m-20 text-start text-4xl font-extrabold tracking-tight text-balance text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600'>Recent Projects</h1>

            <div className='bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] min-h-screen mt-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 p-2 gap-2'>
              {
                projects.map((project)=>(
                  <Card key={project.id} className={`${project.cols}`}>
                    <div className={`${project?.position}`}>
                    <CardHeader className={'h-fit'}>
                      <h1 className='scroll-m-20 text-start text-2xl font-extrabold tracking-tight text-balance'>{project.name}</h1>
                      <h2 className='scroll-m-20 text-start text-lg font-medium tracking-tight text-balance'>{project.sub}</h2>
                      <CardDescription className={'line-clamp-6 md:line-clamp-none'}>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='flex items-center justify-center'>
                        <Image height={10000} width={10000} alt={project.name} src={project.img} className='w-200 rounded-md'/> 
                      </div>
                      <div className='flex items-center justify-center flex-wrap gap-1'>
                        {
                          project.tech.map((tech, index)=>(
                            <div key={index} className='mt-5 px-2 py-1 text-sm border bg-accent rounded-3xl'>
                              {tech}
                            </div>
                          ))
                        }
                      </div>
                    </CardContent>
                    </div>
                    <CardFooter>
                      <Link href={project.demo_url}>
                        <Button>Live Demo <Link2 /></Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              }
            </div>
        </section>

        {/* Contact */}
        <div className='mt-20' id='contact'>
          <h1 className='scroll-m-20 text-start text-4xl font-extrabold tracking-tight text-balance'>Contact</h1>
          <p className='leading-7 [&:not(:first-child)]:mt-6 text-primary/70'>Hit me up — I reply fast, I don't overcomplicate things, and I build with precision.</p>

          <div className='min-h-30vh'>
            <div className='flex items-center justify-center mt-10'>
              <div className='flex items-center justify-center gap-5 flex-wrap'>
                <Link href="tel:+233554435925" target='_blank' className='flex items-center gap-2 p-2 border border-primary/20 rounded-full bg-blue-500/10'>
                  <div className='p-2 border border-primary/50 rounded-full bg-primary/10'>
                    <Phone />
                  </div>
                  +233554435925
                </Link>
                <div className='flex items-center gap-2 p-2 border border-primary/20 rounded-full bg-rose-500/10'>
                  <div className='p-2 border border-primary/50 rounded-full bg-primary/10'>
                    <Mail />
                  </div>
                  narayanbonanzakweku@gmail.com
                </div>
                <Link href="https://wa.me/233554435925" target='_blank' className='flex items-center gap-2 p-2 border border-primary/20 rounded-full bg-blue-500/10'>
                  <div className='p-2 border border-primary/50 rounded-full bg-primary/10'>
                    <MessageCircle />
                  </div>
                  WhatsApp Me
                </Link>
              </div>
            </div>
            <div className='leading-7 [&:not(:first-child)]:mt-6 text-primary/70 text-center'>Or use the form below</div>
            <div className='mt-5 flex items-center justify-center'>
              <form className='grid w-full max-w-sm gap-6' method='POST' action={'https://formsubmit.co/narayanbonanzakweku@gmail.com'}>
                <InputGroup>
                  <Input type={'text'} required placeholder='full name' name='Full Name'/>
                </InputGroup>
                <InputGroup>
                  <Input type={'email'} required placeholder='example@gmail.com' name='Email'/>
                </InputGroup>
                <InputGroup>
                  <Input type={'text'} required placeholder='0554435925' name='Phone Number'/>
                </InputGroup>
                <InputGroup>
                  <Textarea required placeholder='I would like to get a website for my real estate business.' name='Message' className={'h-40vh'}/>
                </InputGroup>
                <Button type='submit'>Submit</Button>
              </form>
            </div>

            <div className='flex items-center justify-center'>
              <div className='mt-10 flex items-center justify-center gap-5 bg-black px-6 py-2 rounded-3xl shadow-2xl border-2 border-rose-600'>
                <Link href={'https://x.com/svddiin'} target='_blank'>
                  
                  <img src="/x_dark.svg" alt="" className='w-8' />
                  
                </Link>
                <Link href={'https://github.com/BonanzaNarayan'} target='_blank'>
                  <img src="/github_dark.svg" alt="" className='w-8' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
