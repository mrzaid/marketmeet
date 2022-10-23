import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'p1fu5xqw',
    dataset:'production',
    apiVersion:'2022-10-23',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder=imageUrlBuilder(client);
//sanity will give urls where our images are stored
export const urlFor = (source)=>builder.image(source);