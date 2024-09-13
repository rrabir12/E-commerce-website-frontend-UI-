

document.addEventListener('DOMContentLoaded', function() {
  const products = [
    { purl: 'pics/f3.jpg', pname: 'School bag', pprice: 'Rs.600' },
    { purl: 'pics/f2.jpeg', pname: 'Hand bag', pprice: 'Rs.900' },
    { purl: 'pics/f1.webp', pname: 'Shoe', pprice: 'Rs.800' },
    { purl: 'pics/f4.jpg', pname: 'Jacket', pprice: 'Rs.900' },
    { purl: 'pics/f3.webp', pname: 'Nike bag', pprice: 'Rs.1100' },
    { purl: 'pics/c3.jpg', pname: 'Ladies coat', pprice: 'Rs.1000' },
    { purl: 'pics/c1.webp', pname: 'White shoe', pprice: 'Rs.1200' },
    { purl: 'pics/c2.webp', pname: 'Nice coat', pprice: 'Rs.1150' },
    { purl: 'pics/c3.jpg', pname: 'Nice coat', pprice: 'Rs.950' },
    { purl: 'pics/c4.jpg', pname: 'Nice coat', pprice: 'Rs.750' },
    { purl: 'pics/s1.avif', pname: 'Nice shoe', pprice: 'Rs.550' },
    { purl: 'pics/s2.avif', pname: 'Nice shoe', pprice: 'Rs.570' },
    { purl: 'pics/s3.webp', pname: 'Nice shoe', pprice: 'Rs.780' },
    { purl: 'pics/s4.avif', pname: 'Nice shoe', pprice: 'Rs.580' },
    { purl: 'pics/watch1.webp', pname: 'Nice watch', pprice: 'Rs.750' },
    { purl: 'pics/watch2.webp', pname: 'Nice watch', pprice: 'Rs.650' },
    { purl: 'pics/watch3.avif', pname: 'Nice watch', pprice: 'Rs.850' },
    { purl: 'pics/watch4.webp', pname: 'Nice watch', pprice: 'Rs.550' },
    { purl: 'pics/Yellow bag1.jpeg', pname: 'Yellow bag', pprice: 'Rs.550' }
  ];

  const productContainer = document.getElementById('product-container');
  const itemsPerPage = 8;
  let currentPage = 1;

  function renderProducts(page) {
    productContainer.innerHTML = ''; // Clear previous products
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'products text-center col-lg-3 col-md-4 col-sm-12';
      
      const img = document.createElement('img');
      img.src = product.purl;
      img.className = 'img-fluid';
      img.alt = 'Product Image';
      
      const starDiv = document.createElement('div');
      starDiv.className = 'star';
      starDiv.innerHTML = `
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
      `;
      
      const productName = document.createElement('h5');
      productName.className = 'pname';
      productName.textContent = product.pname;
      
      const productPrice = document.createElement('h4');
      productPrice.className = 'pprice';
      productPrice.textContent = product.pprice;
      
      const buyButton = document.createElement('a');
      buyButton.className = 'btn buy-btn';
      buyButton.href = 'single_product_page.html';
      buyButton.textContent = 'Buy Now';
      
      productDiv.appendChild(img);
      productDiv.appendChild(starDiv);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(buyButton);
      
      productContainer.appendChild(productDiv);
    });
  }

  function handlePaginationClick(event) {
    const pageItem = event.target.closest('.page-item');
    if (pageItem) {
      if (pageItem.classList.contains('page-number')) {
        currentPage = parseInt(pageItem.dataset.page);
      } else if (pageItem.classList.contains('previous-page') && currentPage > 1) {
        currentPage--;
      } else if (pageItem.classList.contains('next-page') && currentPage < Math.ceil(products.length / itemsPerPage)) {
        currentPage++;
      }
      renderProducts(currentPage);
    }
  }

  // Initial render
  renderProducts(currentPage);

  // Add event listener for pagination
  document.querySelector('.pagination').addEventListener('click', handlePaginationClick);
});
