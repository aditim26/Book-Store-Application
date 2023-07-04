const Book =require("../model/Book");

const getAllBooks = async (req, res, next) => {
    var books;
    try {
      books = await Book.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!books) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ books });
  };  

const getById= async(req,res,next)=> {
    const id = req.params.id
    var books;
    try{
        books = await Book.findOne({id});
    }catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message: "No Book Found"});
    }
    return res.status(200).json({ books });
};

const addBook = async(req,res, next)=>{
    const {name, author, description, price, available, image} = req.body;
    var book;
    try{
        book =new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();   
    }
    catch(err){
        console.log(err);
    }
    if(!book){
     return res.status(500).json({message:"unable to add!"})   
    }
    return res.status(201).json({ book });

};

const updateBook = async(req,res,next) =>{
    const id= req.params.id;
    const {name, author, description, price, available, image} = req.body;
    var books;
    try{
        books = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        });
        books = await books.save();
    }catch(err)
    {
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message: "Unable to update By this ID"});
    }
    return res.status(200).json({ books });
}

const deleteBook = async(req,res,next)=>{
    const id = req.params.id;
    var book;
    try{
        book = await Book.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message: "Unable to delete by this ID"});
    }
    return res.status(200).json({ message: "Product successfully deleted" });
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;