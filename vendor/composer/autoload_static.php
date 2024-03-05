<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1467ef074a6ffb73091a5b25fb02ade7
{
    public static $prefixLengthsPsr4 = array (
        'N' => 
        array (
            'Naos\\InitProject\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Naos\\InitProject\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1467ef074a6ffb73091a5b25fb02ade7::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1467ef074a6ffb73091a5b25fb02ade7::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1467ef074a6ffb73091a5b25fb02ade7::$classMap;

        }, null, ClassLoader::class);
    }
}
