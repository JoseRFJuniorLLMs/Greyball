
# **Next.js E-commerce Product Listing**

This is an e-commerce product listing page built with Next.js and Tailwind CSS. The project demonstrates server-side rendering, state management with Redux, real-time search, and sorting functionality.

## **Features**

- **Server-Side Rendering (SSR)**: Fetch product data on the server before rendering the page.
- **Real-Time Search**: Filter products by name using a search bar that updates the product list as you type.
- **Product Pagination**: Display a limited number of products per page with pagination or infinite scroll to load more products.
- **Sorting**: Sort products by price or rating.
- **Shopping Cart**: Add products to a shopping cart, with a summary displayed in a fixed header.
- **Responsive Design**: The page is responsive and adapts to different screen sizes using Tailwind CSS.
- **TypeScript**: The project is fully typed with TypeScript, ensuring type safety.
- **State Management**: Manage the global state using Redux.

## **Getting Started**

### **Prerequisites**

- Node.js (v14.x or later)
- npm or yarn

### **Installation**

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/nextjs-ecommerce.git
    cd nextjs-ecommerce
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

### **Folder Structure**

```
my-ecommerce-site/
│
├── public/
├── pages/
│   ├── index.tsx
│   ├── _app.tsx
│   └── _document.tsx
├── components/
│   ├── ProductCard.tsx
│   ├── SearchBar.tsx
│   └── CartSummary.tsx
├── redux/
│   ├── store.ts
│   └── cartSlice.ts
├── styles/
│   └── globals.css
├── jest.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

### **Key Files**

- **`pages/index.tsx`**: The main page displaying the list of products.
- **`components/ProductCard.tsx`**: Displays individual product details.
- **`components/SearchBar.tsx`**: Provides a search bar to filter products.
- **`components/CartSummary.tsx`**: Displays a summary of items in the shopping cart.
- **`redux/store.ts`**: Configures the Redux store.
- **`redux/cartSlice.ts`**: Handles cart-related state in Redux.
- **`styles/globals.css`**: Global styles, including Tailwind CSS.

### **Deploying**

To deploy the project, you can use platforms like Vercel (recommended for Next.js) or Netlify. Simply push your repository to a platform and connect it to your account.

### **Bonus Features**

- **Testing**: Basic setup for Jest and React Testing Library (optional).
- **Infinite Scroll**: Load more products as the user scrolls down the page.

## **Contributing**

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

## **License**

This project is licensed under the MIT License.

---

This README provides an overview of the project, how to set it up, and the key features it includes.