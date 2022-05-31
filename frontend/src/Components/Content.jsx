import { BiImage } from 'react-icons/bi'
import likeSvg from '../utils/like.svg'
import divierteSvg from '../utils/divierte.svg'
import loveSvg from '../utils/love.svg'

const Content = ({ user }) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <section className='w-full h-full content py-4 px-8 divide-y overflow-auto'>
            <div className="flex flex-col gap-2 ">
                <div className="flex gap-4">
                    <img src={user.img} className='w-14 h-14 rounded-full object-cover'></img>
                    <textarea className="border-2 resize-none rounded-md w-full p-2" placeholder="Nueva publicacion"></textarea>
                </div>
                <div className='w-full flex gap-2 justify-end my-2'>
                    <label className="block">
                        <input type="file"
                            className="block p-0 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    </label>
                    <button className='p-2'> Publicar </button>
                </div>
            </div>
            <div className='w-full flex flex-col gap-2 py-2'>
                {
                    arr.map(item => {
                        return (
                            <article key={item} className='w-full bg-slate-100 p-4 rounded-md'>
                                <div className='w-full flex gap-4 items-center justify-between'>
                                    <div className='w-auto flex gap-4 items-center'>
                                        <img src={user.img} className='w-14 h-14 rounded-full object-cover'></img>
                                        <div>
                                            <p>Mi nombre de usuario</p>
                                            <span>Hace 4 horas</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 justify-end'>
                                        <div className='w-auto h-5 flex gap-2 justify-end'>
                                            <span>1250</span>
                                            <img className='w-5 h-5' src={likeSvg} />
                                            <img className='w-5 h-5' src={divierteSvg} />
                                            <img className='w-5 h-5' src={loveSvg} />
                                        </div>
                                        <div className='h-5 flex gap-2 justify-end'>
                                            123 comentarios
                                        </div>

                                    </div>
                                </div>
                                <div className='w-full mt-2 mb-4'>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, a inventore maiores unde, accusantium esse, rerum vel vero reprehenderit culpa et ipsam. Odit quas sequi temporibus. Minus aliquid ratione cum!</p>
                                    <img className='w-1/2 h-1/2 mt-4' src='https://scontent.fpbc2-1.fna.fbcdn.net/v/t39.30808-6/284525179_2843417525962181_101231511952022444_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEWhF693cn0HGKjJKUQkRQd2gYYS94SrO_aBhhL3hKs7-s7_0TG1162GWFBggra2ggV9Im5MxZ_0iCZ-XZZ0X7X&_nc_ohc=ftDfwHI_KcwAX-0GYrN&_nc_ht=scontent.fpbc2-1.fna&oh=00_AT8ycHm4x5br6HKDF4qIH3sZjzHJgnVImnr05EYfqX5pdQ&oe=62972E8E' />
                                </div>
                                <div className='flex w-full mt-2 gap-2 border-t pt-2'>
                                    <div className='w-1/2 text-center hover:bg-slate-200 m-px rounded py-2'>
                                        Reaccionar
                                    </div>
                                    <div className='w-1/2 text-center hover:bg-slate-200 m-px rounded py-2'>
                                        Comentar
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Content