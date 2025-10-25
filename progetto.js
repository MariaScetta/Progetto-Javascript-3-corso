
class Form extends React.Component {
    
   
    
    render(){
        
        return <div>
               <form method="post">
               <textarea id="mytextarea"></textarea>
               <button class="btn btn-success" id="button" onClick={this.salva}>Salva testo in locale</button>
               </form>
               </div>;
    }
    

        salva(){
            let myTextArea = window.parent.tinymce.get('mytextarea').getContent();
            localStorage.setItem("myTextArea",myTextArea);
            
        }
    
}


ReactDOM.render(
    <Form/>,
    document.getElementById("root")
);

tinymce.init({
    selector: '#mytextarea'
    
    
  });










   
    

    
    

    





        
       

   