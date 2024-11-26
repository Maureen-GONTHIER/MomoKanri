type KeyType = string | number

export const mapOrder = <T extends Record<KeyType, any>>
( 
    array: T[], 
    order: KeyType[], 
    key: keyof T
): T[] => {
    array.sort((a,b) => order.indexOf(a[key]) - order.indexOf(b[key]))
    return array
}