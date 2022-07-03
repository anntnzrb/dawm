{ pkgs ? import <nixpkgs>  {} }:

pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    nodejs nodePackages.typescript nodePackages.typescript-language-server
  ];
}
