export function getEntry() {

    const dataEntry = fetch("https://cdn.contentful.com/spaces/rnd91sdq650v/environments/master/entries?access_token=-arM0vTclWA1gVOvMkcSnhYV6APIYDM3Jj7Za6BsC9A")
    .then((r) => r.json())
    .then((d) => {return d})
    
    return dataEntry
}