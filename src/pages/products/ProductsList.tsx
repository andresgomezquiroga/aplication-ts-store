import { useEffect, useState } from "react";
import useProductStore from "../../store/products/useProductStore";
import { IFTableColumn } from "../../interface/IFTableColumn";
import { Table } from "../../components/Table";
import { PaginationTable } from "../../components/PaginationTable";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const navigate = useNavigate();
  const {
    products,
    currentPage,
    productsPerPage,
    fetchProducts,
    setCurrentPage,
    DeleteProduct
  } = useProductStore();


  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);



  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handlePageChange = (pageNumber: number) => {

    setCurrentPage(pageNumber);
  };

  const handleEdit = (rowData: any) => {
    // Redirigir al componente Create con los datos del producto seleccionado
    navigate(`/Crear_products?id=${rowData.id}`, { state: { productToEdit: rowData } });
  };

  const handleDelete = (rowData: any)=> {
    DeleteProduct(rowData.id);
  }


  const searcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filtered = products.filter((product) =>
      product.id.toString().includes(e.target.value) ||
      product.price.toString().includes(e.target.value) ||
      product.title.toString().includes(e.target.value) ||
      product.category.toString().includes(e.target.value) ||
      product.description.toString().includes(e.target.value)
    );
    setFilteredProducts(filtered);
  };

  const allColumns: IFTableColumn[] = [
    { key: "id", label: "ID", type: "text" },
    { key: "title", label: "titulo", type: "text" },
    { key: "price", label: "Precio", type: "text" },
    { key: "image", label: "Imagen", type: "image" },
    { key: "description", label: "Descripción", type: "text" },
    { key: "category", label: "Categoria", type: "text" },
    { key: "edit", label: "Editar", type: "button-edit", onClick: handleEdit },
    { key: "delete", label: "Eliminar", type: "buttom-delete", onClick: handleDelete}
  ];

  const selectedColumns = [
    "id",
    "title",
    "price",
    "image",
    "description",
    "category",
    "edit",
    "delete"
  ];

  return (
    <div className="relative overflow-x-auto max-w-[70%] mt-[5%] ml-[10%]">
      <h1 className="text-center text-3xl mb-8 border-b border-blue-800">
        Listados de productos
      </h1>
      <div className="max-w-md mx-auto m-6">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            value={search}
            onChange={searcher}
            placeholder="Filtros por el id"
          />
        </div>
      </div>
      <Table
        data={currentProducts}
        allColumns={allColumns}
        selectedColumns={selectedColumns}
      />
      <PaginationTable
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsList;
