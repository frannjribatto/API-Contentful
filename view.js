export function viewData(d) {
    
    console.log(d)
    const template = document.querySelector("#card-temp");
    const contentEl = document.querySelector(".v-results");
    contentEl.textContent = "";
    const templateNav = template.content;

    for (let i = 0; i < d.total; i++) {
            const titleEl = templateNav.querySelector(".title-card")
            titleEl.textContent = d.items[i].fields.title
            
            const textEl = templateNav.querySelector(".txt-card")
            textEl.textContent = d.items[i].fields.text.content[0].content[0].value
    
            const urlEl = templateNav.querySelector(".v-link")
            urlEl.href = d.items[i].fields.url

            for (let j = 0; j < d.includes.Asset.length; j++) {
                if (d.items[i].fields.img.sys.id  === d.includes.Asset[j].sys.id) {
                    const imgEl = templateNav.querySelector(".img-card")
                    imgEl.src = d.includes.Asset[j].fields.file.url
                }
            }

            let clone = document.importNode(templateNav, true)
            contentEl.appendChild(clone)
        };



    }
