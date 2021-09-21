// capturando as tags da imagem do botao e da entrada de texto 
let imagem=document.querySelector('#imagem')
// let botao=document.querySelector('#btn')
let texto=document.querySelector('#input')

//ao pesquisar um título apenas ele centraliza o titulo e quebra a linha, nao busqui alguma forma de resolver ainda, acho que é coisa do bootstrap que coloquei

// ao clicar no botao é feita a requisição com o parâmetro s da Api, assim é retornado vários resultados correspondentes ao nome que é q passado, em seguida é feito um for para executar a função mostrar em todos os filmes do array retornado pela api







texto.addEventListener('keyup',function(){

             $.ajax({
                
                url: `http://www.omdbapi.com/?s=${texto.value}&apikey=e1026f57`,
                method: "get",
               
                success: (response)=>{
                    
                    console.log(response)

                    imagem.innerHTML=''
                    if(texto.value == ''){
                        imagem.style.display = 'none'
                    }
                    else if(response['Response']=='False'){
                        imagem.style.display = 'flex'
                        imagem.innerHTML='<h2>Filme não encontrado</h2>'
                    }
                    else{
                        imagem.style.display = 'flex'
                        for(let i=0;i<response['Search'].length;i++)
                        
                            mostrar(response['Search'][i])
                        }
                    

                }
               
                        })
                        
})


function mostrar(objeto){
        
            
            if(objeto.Type!='game'){
                if(objeto.Poster=='N/A'){
                    imagem.innerHTML+=`
                <div class="col-md-3">
                <div class='well text-center'>
                <div id="erro" >Imagem não encontrada</div>
                <h5>${objeto.Title}</h5> 
                <p><button type="button" class="btn btn-primary">Detalhes</button></p>
                </div>
                </div>`}
                    
               
                else{
                
                imagem.innerHTML+=`
                <div class="col-md-3">
                <div class='well text-center'>
                <img src="${objeto.Poster}" alt="${objeto.Title}" height='300'>
                <h5>${objeto.Title}</h5>                                    
                <p><button type="button" class="btn btn-primary">Detalhes</button></p>
                </div>
                </div>`
                }
            }
            
            
        }
        
            // console.log('errou')
            // imagem.innerHTML='<h2>Filme não encontrado</h2>'
            
        // }
    
        // }

    
 
