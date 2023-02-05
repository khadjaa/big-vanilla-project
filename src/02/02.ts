type CityType = {
    title: string
    countyTitle: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}
type TechnologiesType = {
    id: number
    title: string
}
type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    name: "Islam",
    age: 21,
    isActive: false,
    address: {
        streetTitle: "Gr-pr 30",
        city: {
            title: "SPB",
            countyTitle: "Russian Federation",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "JS"
        },
        {
            id: 3,
            title: "CSS"
        }
    ]
}