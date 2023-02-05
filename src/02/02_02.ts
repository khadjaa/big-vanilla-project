export type TitleType = {
    title: string
}

export type AddressType = {
    number?: number
    street: TitleType
}

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title:string
    houses: Array <HousesType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}


