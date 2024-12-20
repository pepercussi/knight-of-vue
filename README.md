# Knight of Vue Project
This project, named "Knight of Vue," is a combination of Laravel, Native PHP, and Vue.js. It was made just for fun while I learning to use Native PHP and Vue JS.

## Requirements

- PHP >= 8.2
- Composer
- Laravel 11.x
- Node.js & npm

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/knight-of-vue.git
    cd knight-of-vue
    ```

2. Install PHP dependencies:
    ```bash
    composer install
    ```

3. Install Node.js dependencies:
    ```bash
    npm install
    ```

4. Copy the `.env.example` file to `.env` and configure your environment variables:
    ```bash
    cp .env.example .env
    ```

    > [!IMPORTANT]
    > If you use spaces " " in the APP_NAME value, you will notice that build for native PHP is going to fail. To avoid this, please not use blank spaces in APP_NAME. 

5. Generate an application key:
    ```bash
    php artisan key:generate
    ```

6. Run the migrations:
    ```bash
    php artisan migrate
    ```

7. Compile the frontend assets:
    ```bash
    npm run dev
    ```

8. Serve the application:
    ```bash
    php artisan native:serve
    ```

## Usage

- As soon you sereve the application a new window will pop up and you will be ready to play.

## Build

You can build this application for windows or mac and get the install files and the executable file for both OS.

### Build for windows

- In the root folder run:
    ```bash
    php artisan native:build win
    ```

### Build for mac

- In the root folder run:
    ```bash
    php artisan native:build mac
    ```

### Build destination

In both previous build cases mentioned the files will be generated inside the ./dist folder.

## Project Structure

- `app/` - Contains the Laravel application code.
- `dist/` - Contains binaries and installs for Windows and Mac.
- `routes/` - Contains the route definitions for the Laravel application.
- `resources/` - Contains the views, assets for the Laravel application.

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.


## Acknowledgements

- [Laravel](https://laravel.com/)
- [Composer](https://getcomposer.org/)
- [Native PHP](https://nativephp.com/)
- [Vue.js](https://vuejs.org/)

## Technologies Used

- Laravel
- Native PHP
- Vue.js

## Learning Resources

- [Laravel Documentation](https://laravel.com/docs)
- [Vue.js Documentation](https://vuejs.org/v2/guide/)
- [Native PHP Documentation](https://nativephp.com/docs/1/getting-started/introduction)
- [PHP Documentation](https://www.php.net/docs.php)
- [Composer Documentation](https://getcomposer.org/doc/)