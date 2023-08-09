FROM php:7.4-cli

RUN apt-get update && \
    apt-get install -y \
    git-core \
    unzip \
    zip \
    wget

 # Install composer dependencies
RUN wget https://composer.github.io/installer.sig -O - -q | tr -d '\n' > installer.sig
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('SHA384', 'composer-setup.php') === file_get_contents('installer.sig')) { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer --2
RUN php -r "unlink('composer-setup.php'); unlink('installer.sig');"

RUN apt-get update
RUN apt-get clean -y

# Create user (will be "synced" with local user)
RUN useradd -m php-cli
