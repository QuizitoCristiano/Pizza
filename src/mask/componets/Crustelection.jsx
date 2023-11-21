// {soma ? (
//     <Fragment>
//       {openNewModal && (
//         <Button
//           sx={{
//             borderRadius: '4px',
//             bgcolor: '#f6410a',
//             fontSize: '12px',
//             fontWeight: '500',
//             padding: '1rem 2rem',
//             color: '#fff',  // Changed 'Color' to 'color' for proper style
//             border: 'none',
//             outline: 'none',
//             fontFamily: 'Roboto sans-serif',
//             // Note: You have 'fontFamily' defined twice. I've removed the duplicate.
//             fontWeight: '900',
//             gap: '2rem',
//             backgroundColor: '#FF6510 !important',
//             '&:hover': {
//               background: 'transparent',
//               transition: '0.6s',
//             },
//           }}
//         >
//           Adicionar na sacola
//           <Box onClick={toggleNewModal} sx={{ height: 'auto' }}>
//             {sizes.map((item, index) => {
//               const calculatePrice = () => {
//                 const price = data.pizzaPrice;
  
//                 return selectedSize === 'small'
//                   ? price - price * percentage
//                   : price + price * percentage;
//               }
  
//               return (
//                 <Fragment key={index}>
//                   {item.size === selectedSize && (
//                     <Fragment>
//                       {`R$ ${(calculatePrice() + soma).toFixed(2)}`}
//                     </Fragment>
//                   )}
//                 </Fragment>
//               );
//             })}
//           </Box>
//         </Button>
//       )}
//     </Fragment>
//   ) : null}
  
  