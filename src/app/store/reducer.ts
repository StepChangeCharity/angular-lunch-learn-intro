import { ActionReducer, Action } from '@ngrx/store';

export const LIKE = 'LIKE';
export const UNLIKE = 'UNLIKE';

export interface State {
    dogs: Array<any>,
    topDog: any,
    runt: any
}

const initialState: State = {
    dogs: [
        {
            id: 1,
            breed: 'Labrador',
            description: 'The Labrador Retriever, also Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in the United Kingdom and the United States.',
            src: 'assets/images/dogs/labrador.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            id: 2,
            breed: 'Cocker Spaniel',
            description: 'Cocker Spaniels are dogs belonging to two breeds of the spaniel dog type: the American Cocker Spaniel and the English Cocker Spaniel, both of which are commonly called simply Cocker Spaniel in their countries of origin. In the early 20th century, Cocker Spaniels also included small hunting Spaniels.',
            src: 'assets/images/dogs/cocker-spaniel.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            id: 3,
            breed: 'Dachshund',
            description: 'The dachshund (UK /ˈdæksənd/ or US /ˈdɑːkshʊnt/ dahks-huunt or /ˈdɑːksənt/) is a short-legged, long-bodied, hound-type dog breed.',
            src: 'assets/images/dogs/dachshund.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            id: 4,
            breed: 'Cockapoo',
            description: 'A Cockapoo (also known as a spoodle) is a mixed-breed dog that is the cross between either Cocker Spaniel breeds (American Cocker Spaniel or English Cocker Spaniel) and a poodle (in most cases a miniature poodle or toy poodle).',
            src: 'assets/images/dogs/cockapoo.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            id: 5,
            breed: 'Shih-poo',
            description: 'The Shih-poo is a small domestic dog. It is a crossbreed between a Poodle and a Shih Tzu. The name Shih-poo is a portmanteau of the two breed names',
            src: 'assets/images/dogs/shih-poo.jpg',
            likes: 0,
            dislikes: 0
        }
    ],
    topDog: null,
    runt: null
}

export function dogReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case LIKE:
            let likedIndex = state.dogs.findIndex(dog => dog.id === action.payload);
            let likedDog = state.dogs[likedIndex];
            likedDog.likes++;

            if (likedIndex >= 0) {
                let updatedItems = [
                    ...state.dogs.slice(0, likedIndex),
                    likedDog,
                    ...state.dogs.slice(likedIndex + 1)
                ];

                return Object.assign({}, state, { 
                    dogs: updatedItems, 
                    topDog: getTopDog(updatedItems), 
                    runt: getRunt(updatedItems)
                });
            } else {
                return Object.assign({}, state);
            }

        case UNLIKE:
            let unlikedIndex = state.dogs.findIndex(dog => dog.id === action.payload);
            let unlikedDog = state.dogs[unlikedIndex];
            unlikedDog.likes--;

            if (unlikedIndex >= 0) {
                let updatedItems = [
                    ...state.dogs.slice(0, unlikedIndex),
                    unlikedDog,
                    ...state.dogs.slice(unlikedIndex + 1)
                ];

                return Object.assign({}, state, { 
                    dogs: updatedItems, 
                    topDog: getTopDog(updatedItems), 
                    runt: getRunt(updatedItems)
                });
            } else {
                return Object.assign({}, state);
            }

        default:
            return Object.assign({}, state);
    }
}

function getTopDog(dogs: Array<any>): any {    
    let sortableArray = Array.from(dogs);
    sortableArray.sort((a, b) => b.likes - a.likes);
    return sortableArray[0];
}

function getRunt(dogs: Array<any>): any {    
    let sortableArray = Array.from(dogs);
    return sortableArray.sort((a, b) => b.likes - a.likes).reverse()[0];
}