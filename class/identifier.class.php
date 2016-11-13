<?php

namespace rhino\RhinoIdentifier;

/**
 * Class Identifier
 * @package rhino\RhinoIdentifier
 */
class Identifier
{

    /**
     * @var string
     */
    private $token = '';

    /**
     * @var string
     */
    private $cookie = '';


    /**
     * Identifier constructor.
     * @param int $characters
     * @param bool $numbers
     */
    public function __construct($characters, $numbers = true)
    {
        self::generate($characters, $numbers);
    }

    /**
     * @return string
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * @return string
     */
    public function getCookie()
    {
        return $this->cookie;
    }


    /**
     * @param int $characters
     * @param bool $numbers
     */
    private function generate($characters, $numbers = true)
    {

        $letters = range('a', 'z');
        $number = range(0, 9);

        shuffle($letters);

        if ($numbers) {
            $token = array_merge($letters, $number);
        } else {
            $token = $letters;
        }

        shuffle($token);

        $token = implode(array_slice($token, 0, $characters));

        $token = strtoupper($token);

        $this->token = $token;

    }

}