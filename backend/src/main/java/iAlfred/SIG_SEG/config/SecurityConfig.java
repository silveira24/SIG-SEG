package iAlfred.SIG_SEG.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Permitir o acesso sem autenticação para todas as rotas
                .authorizeHttpRequests(authz -> authz
                        .anyRequest().permitAll()  // Permite todas as requisições sem autenticação
                )
                // Configura o login e autenticação básica
                .formLogin(Customizer.withDefaults())
                .httpBasic(Customizer.withDefaults())

                // Desabilitar CSRF para API REST
                .csrf(csrf -> csrf
                        .disable()  // Desabilita CSRF (recomendado para APIs REST)
                );

        return http.build();
    }
}
