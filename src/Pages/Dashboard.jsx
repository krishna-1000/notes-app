import React from 'react'
import { Link } from 'react-router-dom'
import { useModal } from '../hooks/useModal'
import Login from '../Component/AuthComponent/Login';
const Dashboard = () => {
    const { isOpen, content, openModal, closeModal } = useModal();
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h1>Dashboard</h1>
            <button className='bg-green-400 rounded-sm w-fit align-middle'  onClick={()=>openModal(<Login/>)}>Login</button>
            <button className='bg-green-400 rounded-sm w-fit align-middle' onClick={()=>openModal(<Login/>)}>Signup</button>


            <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea quam, sequi soluta et odit vitae corrupti labore magnam natus vel beatae excepturi. Voluptate voluptas adipisci fuga possimus laudantium assumenda?
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi odit in earum natus, esse delectus dignissimos, provident sed laborum soluta asperiores? Fuga, cumque in magnam iure officia repellat voluptates?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime cupiditate, aspernatur molestiae vitae omnis beatae! Ea soluta tempora corrupti dolorum eum, alias, similique suscipit accusantium reiciendis quod atque enim.
            </p>
            <Link to={'/home'}><button>LOGIN</button></Link>
        </div>
    )
}

export default Dashboard
