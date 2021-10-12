import programming from '../assets/cat-coding.jpg'
import writting from '../assets/cat-writting.jpg'
import video from '../assets/cat-video.jpg'
import graphics from '../assets/cat-animation.jpg'
import home from '../assets/cat-living.jpg'
import travel from '../assets/cat-travel.jpg'
import business from '../assets/cat-business.jpg'

export const data = {
    products: [
        {
            name: 'cucumber',
            category: 'food',
            creator: 'tatenda',
            id: 1,
            location: 'harare'
        },
        {
            name: 'cellphone',
            category: 'tech',
            creator: 'tatenda',
            id: 2,
            location: 'harare'
        }
    ],
    filter_options :[
        {name: 'Price (Low to high)'},
        {name: 'Price (High to low)'},
        {name: 'Location (Near to further)'},
        {name: 'Location (Further to near)'}
    ],
    categories :[
        {name: 'Programming & tech', image: programming},
        {name: 'Writing & translation', image: writting},
        {name: 'Video  & animation', image: video},
        {name: 'Graphics & design', image: graphics},
        {name: 'Home & living', image: home},
        {name: 'Vehicle & transportation', image:travel},
        {name: 'Business', image: business}
    ]
}
