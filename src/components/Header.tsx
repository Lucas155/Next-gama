
import { AllCategories } from '../interfaces'
import { GetStaticProps } from 'next';
import api from '../service/api';

export default function HeaderComponent({ categories }: AllCategories) {
    console.log(categories)
    return (
        <header>
            <div>



            </div>
        </header>
    )
}

export const getStaticProps: GetStaticProps<AllCategories> = async (context) => {
    const response = await api.get('categories')
    const categories = response.data;

    return {
        props: {
            categories,
        },
        revalidate: 60
    }
}