/** Runs before paint to avoid theme flash */
export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';}else{document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
