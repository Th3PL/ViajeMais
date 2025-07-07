import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container,Button,CircularProgress,Chip } from '@mui/material';
import { 
  AccessTime, 
  OpenInNew 
} from '@mui/icons-material';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import './Blog.css';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?tag=travel&per_page=6');
        if (!response.ok) {
          throw new Error('Falha ao carregar artigos');
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'dd MMM yyyy', { locale: ptBR });
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <div className="blog-page">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ 
          fontWeight: 'bold', 
          mb: 6,
          color: 'text.primary'
        }}>
          Blog de Viagens
        </Typography>

        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item key={article.id} xs={12} sm={6} md={4}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}>
                {article.cover_image && (
                  <CardMedia
                    component="img"
                    height="160"
                    image={article.cover_image}
                    alt={article.title}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {article.description || 'Nenhuma descrição disponível.'}
                  </Typography>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <AccessTime fontSize="small" sx={{ mr: 1 }} />
                    <Typography variant="caption">
                      {formatDate(article.published_at)}
                    </Typography>
                  </div>
                  {article.tag_list.length > 0 && (
                    <div style={{ marginBottom: 12 }}>
                      {article.tag_list.slice(0, 3).map((tag) => (
                        <Chip 
                          key={tag} 
                          label={tag} 
                          size="small" 
                          sx={{ mr: 1, mb: 1 }} 
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
                <Button 
                  variant="contained" 
                  endIcon={<OpenInNew />}
                  href={article.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    m: 2, 
                    backgroundColor: '#99BC85',
                    '&:hover': {
                      backgroundColor: '#7fa073'
                    }
                  }}
                >
                  Leia mais
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;