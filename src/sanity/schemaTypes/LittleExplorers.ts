import { defineField, defineType } from "sanity";

const LittleExplorers = defineType ({
    title:"LittleExplorers",
    name:"LittleExplorers",
    type:"document",
    fields:[
       defineField({
          title:"Product Name",
          name:"productname",
          type:"string",
          
        }),
        defineField({
            title:"Product Description",
            name:"productdescription",
            type:"text"
          }),
           defineField({
            title:"Product Image",
            name:"productimage",
            type:"image"
          }),
          defineField({
            title:"Product price",
            name:"productPrice",
            type:"number"
          }),
          defineField({
            title:"Product raiting",
            name:"productraiting",
            type:"number"
          })
    ]
})
export default LittleExplorers ;