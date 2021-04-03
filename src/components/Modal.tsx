import Image from 'next/image';


export default function Modal(){
    return(
        <div>
            <p>Bem vindo a Gama academy</p>
            <Image
                    src="/img/logo.png"
                    width={200}
                    height={80}
                />                

        </div>
    )
}