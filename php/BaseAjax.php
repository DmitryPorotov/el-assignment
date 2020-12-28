<?php


abstract class BaseAjax
{

    public function __construct(string $queryString)
    {
        $this->parseQueryString($queryString);
    }

    private function parseQueryString(string $queryString) {
        $params = explode('&', $queryString);
        foreach ($params as $p) {
            $kv = explode('=', $p);
            $this->queryStringParams[$kv[0]] = $kv[1];
        }
    }

    protected array $queryStringParams;

    protected function getParam(string $name) {
        return $this->queryStringParams[$name] ?? null;
    }
}
