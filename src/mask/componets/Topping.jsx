// import react, { useState, useEffect } from 'react'
// import { TextField, Typography, Stack, Box, Button, Input } from '@mui/material'

// import cherry from '../img/cherry.png'
// import Milho from '../img/corn.png'
// import chilli_1 from '../img/chilli-1.png'
// import garlic from '../img/garlic-2.png'
// import jalapeno from '../img/jalapeno.png'
// import leaves from '../img/leaves.png'
// import AzonasBranco from '../img/Azeitonas-braco.png'
// import AzonasPreto from '../img/Azonas-preto.png'

// import TomatesFrescos from '../img/fresh-tomatoes.png'
// import Mussarela from '../img/mozzarella.png'
// import Cogumerlo from '../img/mushrooms.png'
// import Olives from '../img/olives.png'
// import Parmesao from '../img/parmesan.png'
// import Folhas from '../img/leaves.png'

// const ingredientesMock = [
//   {
//     Image: AzonasBranco,
//     price: 28.99,
//     name: ' Azeitonas Branco',
//   },
//   {
//     Image: AzonasPreto,
//     price: 23.99,
//     name: ' Azeitonas Preto',
//   },
//   {
//     Image: cherry,
//     price: 14.19,
//     name: ' Tomate',
//   },
//   {
//     Image: Milho,
//     price: 14.99,
//     name: ' Milho',
//   },
//   {
//     Image: chilli_1,
//     price: 10.44,
//     name: 'pimenta',
//   },
//   {
//     Image: garlic,
//     price: 9.66,
//     name: ' Alho',
//   },

//   {
//     Image: jalapeno,
//     price: 8,
//     name: 'Queijo',
//   },
//   {
//     Image: leaves,
//     price: 20,
//     name: ' Queijo',
//   },

//   {
//     Image: TomatesFrescos,
//     price: 12,
//     name: ' Tomates Frescos',
//   },
//   {
//     Image: Mussarela,
//     price: 10,
//     name: ' Mussarela',
//   },
//   {
//     Image: Cogumerlo,
//     price: 10,
//     name: 'Cogumerlo',
//   },
//   {
//     Image: Olives,
//     price: 21,
//     name: ' Olives',
//   },

//   {
//     Image: Parmesao,
//     price: 8,
//     name: 'Parmesão',
//   },
//   {
//     Image: Folhas,
//     price: 20,
//     name: ' Folhas',
//   },
// ]

// export const Topping = ({ setPedido }) => {
//   const [selectedItems, setSelectedItems] = useState([])
//   const [soma, setSoma] = useState(0)

//   // Função para lidar com a marcação/desmarcação de itens
//   const handleItemToggle = (index) => {
//     const itemIndex = selectedItems.indexOf(index)
//     if (itemIndex === -1) {
//       setSelectedItems([...selectedItems, index])
//     } else {
//       const updatedItems = [...selectedItems]
//       updatedItems.splice(itemIndex, 1)
//       setSelectedItems(updatedItems)
//     }
//   }

//   // Função para calcular o total dos itens marcados
//   const calculateTotal = () => {
//     const total = selectedItems.reduce(
//       (acc, index) => acc + ingredientesMock[index].price,
//       0
//     )
//     setSoma(total)
//   }

  
//   const getIngrediente = (arrayIndex ) => {
//     const ingredientes = []
//     for (let i = 0; i < arrayIndex.length; i++) {
//         const ingrediente = {    
//             name: ingredientesMock[arrayIndex[i]].name ,
//             price: ingredientesMock[arrayIndex[i]].price
         
//         } 
//         ingredientes.push(ingrediente)
        
//     }
//    return ingredientes;
//   }



//   const addIngrediente = () => {
//     calculateTotal()
//     console.log(selectedItems);

//     const Itens = getIngrediente(selectedItems); 
        
//     setPedido((prevPedido) => ({
//       ...prevPedido,
//       ingredientes: [...prevPedido.ingredientes, Itens],
//     }))
//   }

//   return (
//     <Stack
//       sx={{
//         width: '100%',
//         height: 'auto',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'relative',
//         flexDirection: 'row',
//         height: 'auto',
//         flexWrap: 'wrap',
//         gap: '2rem',
//       }}
//     >
//       {ingredientesMock.length > 0 &&
//         ingredientesMock.map((addPizza, index) => {
//           const isChecked = selectedItems.includes(index)

//           return (
//             <Typography
//               key={index}
//               sx={{
//                 color: 'red',
//                 border: '1px solid orange',
//                 borderRadius: '8px',
//                 Width: '450px',
//                 // background: 'green',
//                 display: 'flex',
//                 flexDirection: 'column',

//                 textAlign: 'center',
//               }}
//             >
//               <Box>
//                 <img src={addPizza?.Image} width={95} height={65} alt="" />
//               </Box>
//               <Box>{addPizza?.name}</Box>
//               <Box sx={{ color: 'blue' }}>{addPizza?.price}</Box>
//               <input
//                 type="checkbox"
//                 checked={isChecked}
//                 onChange={() => handleItemToggle(index)}
//               />
//             </Typography>
//           )
//         })}

//       <Button
//         sx={{
//           borderRadius: '4px',
//           bgcolor: '#f6410a',
//           fontSize: '12px',
//           fontWeight: '500',
//           padding: '1rem 2rem',
//           Color: '#fff',
//           border: 'none',
//           outline: 'none',
//           fontFamily: 'Roboto sans-serif',
//           fontFamily: 'Shrikhand cursive',
//           fontWeight: '900',
//           gap: '2rem',
//           backgroundColor: '#FF6510 !important',

//           '&:hover': {
//             background: 'transparent',
//             transition: '0.6s',
//           },
//         }}
//         onClick={addIngrediente}
//       >
//         Calcular Total
//       </Button>

//       {/* Exiba os itens marcados e o total */}
//       {selectedItems.length > 0 && (
//         <div>
//           {/* <Typography sx={{ color: 'green' }}>
//                         Itens Marcados:
//                     </Typography>
//                     <ul>
//                         {selectedItems.map((index) => (
//                             <li key={index}>{ingredientesMock[index].name}</li>
//                         ))}
//                     </ul> */}
//           <Typography
//             sx={{
//               color: 'green',
//               fontSize: '1.8rem',
//               fontWeight: '900',
//             }}
//           >
//             Total: {soma}
//           </Typography>
//         </div>
//       )}
//     </Stack>
//   )
// }



