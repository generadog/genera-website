import http.server, socketserver, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

PORT = 3000
handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map.update({'.html': 'text/html'})

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
