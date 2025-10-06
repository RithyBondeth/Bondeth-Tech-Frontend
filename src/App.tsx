import { Poster } from "./components/poster"
import { CategoryMenu } from "./components/product/category-menu"
import { ProductRow } from "./components/product/product-row"

function App() {
   return (
    <div>
      <Poster/>
      <CategoryMenu/>
      <ProductRow 
        categoryHeader={{
          icon: "phone_android",
          label: "Phone",
          onClick: () => {}
        }}
      />
      <ProductRow
        categoryHeader={{
          icon: "devices",
          label: "Laptop",
          onClick: () => {}
        }}
      />
    </div>
  )
}

export default App
